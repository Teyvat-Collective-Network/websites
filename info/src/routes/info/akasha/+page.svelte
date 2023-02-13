<script lang="ts">
    import Card from "../../../lib/Card.svelte";
    import Linkable from "../../../lib/Linkable.svelte";
    import Navigation from "../../../lib/Navigation.svelte";
</script>

<div class="container">
    <Navigation last={["/info/hq", "HQ"]}>
        <div id="main">
            <h1>The Akasha System</h1>
            <p>
                The Akasha System is the TCN's central information management system. It is
                available at <a href="https://akasha.hyper-neutrino.xyz"
                    >https://akasha.hyper-neutrino.xyz</a
                > and as a bot in HQ.
            </p>
            <p>
                You will need to log in to access this webpage. Information on this page is only for
                use by the TCN council unless otherwise specified, and sharing it with other people
                is a violation of the rules.
            </p>
            <Linkable e="h2" id="website" value="The Website" />
            <Linkable e="h3" id="documents" value="Documents" />
            <p>
                The main feature of the Akasha System is its document storage. You may upload
                documents on the website. Each document has the following fields, most of which are
                optional:
            </p>
            <ul>
                <li>
                    <b>Authors</b>: a list of authors that is displayed in searches and document
                    information. This is different from the uploader (you), but make sure you have
                    permission to upload documents or that it has been shared in HQ already.
                </li>
                <li>
                    <b>Related Users</b>: a list of users mentioned by the document. This document
                    will show up on that user's page.
                </li>
                <li>
                    <b>Related Servers</b>: a list of servers mentioned by the document. This
                    document will show up on that server's page.
                </li>
                <li>
                    <b>Title, Description</b>: metadata about the document.
                </li>
                <li>
                    <b>Document Link</b>: any URL; your document does not have to be on a particular
                    service.
                </li>
            </ul>
            <Linkable e="h3" id="server-list" value="Server List" />
            <p>
                You can find a list of TCN servers and other servers that you are in. Click a server
                to view its information (including its council members for TCN servers) and a list
                of any documents attached to it.
            </p>
            <p>
                Additionally, you can enter the ID of a server directly to pull up any information
                about it, if any can be found. This may not work if the server is not known as the
                bot cannot fetch servers you and it are not in.
            </p>
            <Linkable e="h3" id="user-information" value="User Information" />
            <p>
                There is no list of users as that would be unreasonably long, but you can enter a
                user's ID directly to view information about them including their position on the
                council if any, servers they staff in, and any documents attached to them.
            </p>
            <Linkable e="h2" id="bot" value="The Bot" />
            <Linkable e="h3" id="terminal" value="The Akasha Terminal" />
            <p>
                You can find the Akasha Terminal in <b>#akasha-terminal</b>. It has the following
                features.
            </p>
            <div class="cards">
                <Card icon="tour" title="Tour">
                    <p>Get a guided tour of HQ and the Akasha System.</p>
                </Card>
                <Card icon="assistant" title="Quickstart">
                    <p>
                        See a paginated quickstart within Discord. You may prefer this or <a
                            href="/info/quickstart">this page</a
                        >.
                    </p>
                </Card>
                <Card icon="list_alt" title="TCN Directory">
                    <p>
                        View a list of TCN resources. Some of this information is private and
                        therefore not listed on this website.
                    </p>
                </Card>
                <Card icon="hub" title="Server Info">
                    <p>View a server's information by entering its ID.</p>
                </Card>
                <Card icon="account_circle" title="User Info">
                    <p>View a user's information by entering their ID.</p>
                </Card>
            </div>
        </div>
    </Navigation>
</div>
