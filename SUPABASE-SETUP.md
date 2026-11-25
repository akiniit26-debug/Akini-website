# AKINI Supabase Admin setup

1. Open Supabase SQL Editor for project `nbysajwfczndnfjaokjs`.
2. Run the complete SQL in `supabase/schema.sql`.
3. In Supabase Authentication > Users, create/ invite the admin user `mansurahmed833@gmail.com`. Set a strong password privately in Supabase; do not share it in chat.
4. In Project Settings > API, copy the **publishable key** (or legacy anon/public key). Never copy the secret or service_role key.
5. Put that public key in `supabase-config.js` replacing `PASTE_YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY_HERE`.
6. Open `https://akini.eu/manage-products.html`, sign in, then click **Import existing products.json** once.

Security:
- RLS is enabled.
- Public visitors can read active products only.
- Insert/update/delete is restricted by RLS to the authenticated email `mansurahmed833@gmail.com`.
- The browser key is public by design; the service_role key must never be exposed.
