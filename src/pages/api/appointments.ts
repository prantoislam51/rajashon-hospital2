
import type { APIRoute } from 'astro';

export const prerender = false;

const json = (data: unknown, status = 200) => {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-store',
        },
    });
};

export const GET: APIRoute = async () => {
    return json({
        success: true,
        message: 'Appointment API is running.',
    });
};

export const POST: APIRoute = async ({ request }) => {
    try {
        const scriptUrl = import.meta.env.GOOGLE_APPS_SCRIPT_URL;

        if (!scriptUrl) {
            return json({
                success: false,
                message: 'Google Apps Script URL is missing.',
            }, 500);
        }

        if (!request.headers.get('content-type')?.includes('application/json')) {
            return json({
                success: false,
                message: 'Invalid request format.',
            }, 415);
        }

        const data = await request.json();

        if (!data || typeof data !== 'object' || Array.isArray(data)) {
            return json({
                success: false,
                message: 'Invalid appointment data.',
            }, 400);
        }

        const required = [
            'patientName',
            'mobile',
            'age',
            'doctorName',
            'doctorSlug',
            'doctorSpecialty',
            'appointmentDate',
            'appointmentTime',
        ];

        for (const field of required) {
            if (
                data[field] === undefined ||
                data[field] === null ||
                String(data[field]).trim() === ''
            ) {
                return json({
                    success: false,
                    message: `Missing required field: ${field}`,
                }, 400);
            }
        }

        const mobile = String(data.mobile).replace(/[\s-]/g, '');
        const age = Number(data.age);
        const fee = Number(data.appointmentFee);

        if (!/^(?:\+?88)?01[3-9]\d{8}$/.test(mobile)) {
            return json({
                success: false,
                message: 'Invalid mobile number.',
            }, 400);
        }

        if (!Number.isInteger(age) || age < 0 || age > 120) {
            return json({
                success: false,
                message: 'Invalid patient age.',
            }, 400);
        }

        if (!Number.isFinite(fee) || fee < 0) {
            return json({
                success: false,
                message: 'Invalid appointment fee.',
            }, 400);
        }

        const clean = (value: unknown, max = 500) => {
            const result = String(value ?? '').trim();

            if (result.length > max) {
                throw new Error('A text field is too long.');
            }

            return result;
        };

        const payload = {
            hospitalName: clean(data.hospitalName, 200),
            patientName: clean(data.patientName),
            mobile,
            age,
            doctorName: clean(data.doctorName),
            doctorSlug: clean(data.doctorSlug),
            doctorSpecialty: clean(data.doctorSpecialty),
            specialtyKey: clean(data.specialtyKey),
            appointmentDate: clean(data.appointmentDate),
            appointmentTime: clean(data.appointmentTime),
            appointmentFee: fee,
        };

        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(payload),
            redirect: 'follow',
            signal: AbortSignal.timeout(20000),
        });

        const responseText = await response.text();

        let result;

        try {
            result = JSON.parse(responseText);
        } catch {
            console.error('Google Apps Script raw response:', responseText);

            const isGoogleLogin = responseText.includes('ServiceLogin') || responseText.includes('accounts.google.com');
            const isHtml = responseText.trim().startsWith('<') || responseText.includes('<html');

            const message = isGoogleLogin
                ? 'Google Apps Script permissions error: Web App access must be set to "Anyone" (Deploy > Manage deployments > Who has access: Anyone).'
                : isHtml
                ? 'Google Apps Script returned an HTML page instead of JSON. Ensure the Web App URL ends in /exec and the script uses ContentService.MimeType.JSON.'
                : 'Google Apps Script returned an invalid response.';

            return json({
                success: false,
                message,
            }, 502);
        }

        if (
            !response.ok ||
            result.success !== true ||
            !result.appointmentId
        ) {
            return json({
                success: false,
                message: result.message || 'Unable to save appointment.',
            }, 502);
        }

        return json({
            success: true,
            message: 'Appointment saved successfully.',
            appointmentId: result.appointmentId,
        });

    } catch (error) {
        console.error('Appointment API error:', error);

        return json({
            success: false,
            message: error instanceof Error
                ? error.message
                : 'Appointment submission failed.',
        }, 500);
    }
};
