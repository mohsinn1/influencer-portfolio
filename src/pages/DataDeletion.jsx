import LegalPage from '../components/LegalPage.jsx'

export default function DataDeletion() {
  return (
    <LegalPage eyebrow="Legal" title="Data Deletion Instructions" updated="August 12, 2026">
      <p>
        This page explains how to request deletion of data associated with kinzamohsin.com, including
        any data connected through Meta products such as Facebook Login or the Instagram API, in line
        with Meta's Platform Data Policy.
      </p>

      <h2>What data this site holds</h2>
      <p>
        This site does not have visitor accounts or logins, so it does not hold personal profiles for
        the general public. The only Meta-connected data involved is Kinza Mohsin's own Instagram
        Business/Creator account, connected directly by Kinza Mohsin to display public reach and
        engagement statistics (such as follower count and post views) on this portfolio. No data about
        site visitors is collected through Meta Login or the Instagram API.
      </p>

      <h2>How to request deletion</h2>
      <p>If you would like any data related to you deleted, you can:</p>
      <ul>
        <li>
          <strong>Revoke access directly from Instagram/Facebook.</strong> Go to your Instagram or
          Facebook account settings → <em>Apps and Websites</em> (or <em>Security → Apps and Websites</em>),
          find this app, and remove its access. This immediately stops any further data from being
          shared with this site.
        </li>
        <li>
          <strong>Contact us directly</strong> using the details below and request deletion. We will
          confirm and remove any associated data from our systems within 30 days.
        </li>
      </ul>

      <h2>What happens after a deletion request</h2>
      <p>
        Once a deletion request is confirmed, any cached account or insights data tied to the request
        is permanently removed from our systems. Public content already posted on Instagram itself is
        unaffected, since that lives on Instagram's platform and is managed through your Instagram
        account directly.
      </p>

      <div className="legal-contact">
        <h2 style={{ marginTop: 0 }}>Request a deletion</h2>
        <p>Send a deletion request to Kinza Mohsin directly:</p>
        <p>
          WhatsApp:{' '}
          <a href="https://wa.me/923297462916" target="_blank" rel="noopener">
            +92 329 7462916
          </a>
          <br />
          Instagram:{' '}
          <a href="https://instagram.com/kinza__mohsin" target="_blank" rel="noopener">
            @kinza__mohsin
          </a>
        </p>
      </div>

      <p style={{ marginTop: '1.6rem' }}>
        See also our <a href="/privacy-policy">Privacy Policy</a> for more on how information is used.
      </p>
    </LegalPage>
  )
}
