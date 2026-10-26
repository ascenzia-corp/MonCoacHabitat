/* Shared form submission: POST the form as JSON to the endpoint stored in
   `data-endpoint` (Formspree-compatible) and report success or a French
   error message. No endpoint configured = honest failure, never a fake success. */

export interface SubmitResult {
  ok: boolean;
  message: string;
}

const NOT_CONFIGURED =
  'L’envoi en ligne n’est pas encore activé. Appelez-moi ou écrivez-moi sur WhatsApp, je vous répondrai rapidement.';
const FAILED = 'L’envoi a échoué. Réessayez dans un instant, ou appelez-moi directement.';

export async function submitJson(form: HTMLFormElement): Promise<SubmitResult> {
  const endpoint = form.dataset.endpoint?.trim();
  if (!endpoint) return { ok: false, message: NOT_CONFIGURED };

  const data = new FormData(form);
  // Honeypot: a filled hidden field means a bot; pretend success, send nothing.
  if (String(data.get('_gotcha') ?? '').length > 0) return { ok: true, message: '' };

  const hasFiles = Array.from(data.values()).some((v) => v instanceof File && v.size > 0);
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (submit) submit.disabled = true;
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: hasFiles
        ? { Accept: 'application/json' }
        : { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: hasFiles ? data : JSON.stringify(Object.fromEntries(Array.from(data.entries()).filter(([, v]) => !(v instanceof File)))),
    });
    if (res.ok) return { ok: true, message: '' };
    return { ok: false, message: FAILED };
  } catch {
    return { ok: false, message: FAILED };
  } finally {
    if (submit) submit.disabled = false;
  }
}
