import type { APIActionRowComponent, APIMessageActionRowComponent, Guild, GuildMember, Invite, User } from "discord.js";
import type { ObjectId } from "mongodb";

export type TCNGuild = {
    id: string;
    name: string;
    character: string;
    invite: string;
    owner: string;
    advisor?: string;
    voter: string;
    description?: String;
};

export type TCNUser = {
    id: string;
    guilds: string[];
    roles: string[];
};

export type LocalsDataUser = {
    id: string;
    username: string;
    discriminator: string;
};

export type LocalsDataAPIUser = {
    id: string;
    guilds: string[];
    roles: string[];
};

export type LocalsData = {
    dark: boolean;
    user: LocalsDataUser;
    api_user: LocalsDataAPIUser;
    observer: boolean;
    owner: boolean;
    advisor: boolean;
    council: boolean;
};

export type Entry<ID extends boolean> = ID extends true ? { _id: ObjectId } : {};

export type Banshare<ID extends boolean = false> = Entry<ID> & {
    message: string;
    url: string;
    user: string;
    server: string;
    id_list: string[];
    severity: string;
    reason: string;
    evidence: string;
    urgent: boolean;
    published?: boolean;
    rejected?: boolean;
    rescinded?: boolean;
    reminded?: number;
};

export type BansharePost<ID extends boolean = false> = Entry<ID> & {
    guild: string;
    channel: string;
    message: string;
    banshare: string;
};

export type BanshareSettings<ID extends boolean = false> = Entry<ID> & {
    autoban?: string;
    autoban_member?: string;
    autoban_dm_scams?: boolean;
    daedalus?: boolean;
    suppress_dm_scams?: boolean;
    no_button?: boolean;
};

export type Character<ID extends boolean = false> = Entry<ID> & {
    id: string;
    name: string;
    element: string;
    weapon: string;
    region: string;
};

export type Poll<ID extends boolean = false> = Entry<ID> & {
    id: number;
    question: string;
    duration: number;
    close: Date;
    quorum: number;
    preinduct: boolean;
    live: boolean;
    restricted: boolean;
    dm: boolean;
    closed?: boolean;
    channel: string;
    message: string;
    required?: string[];
    server?: string;
    min?: number;
    max?: number;
    options?: string[];
    wave?: number;
    seats?: number;
    candidates?: string[];
} & (
        | { mode: "proposal" }
        | { mode: "induction"; server: string }
        | { mode: "selection"; min: number; max: number; options: string[] }
        | { mode: "election"; wave: number; seats: number; candidates: string[] }
    );

export type BaseVote = {
    abstain: boolean;
    yes?: boolean;
    verdict?: string;
    selected?: string[];
    rankings?: string[];
    countered?: string[];
};

export type PollVote<ID extends boolean = false> = Entry<ID> &
    BaseVote & {
        poll: number;
        user: string;
    };

export type CalendarEvent<ID extends boolean = false> = Entry<ID> & {
    title: string;
    start: number;
    end: number;
    light: string;
    dark: string;
    body: string;
    invites?: string;
    invite_data?: {
        code: string;
        name: string;
        banner: string | null;
        icon: string | null;
    }[];
};

export type CalendarTrack<ID extends boolean = false> = {
    events: CalendarEvent<ID>[];
};

export type GuildMapEntry<ID extends boolean = false> = Entry<ID> & {
    id: string;
    name: string;
};

export type UserMapEntry<ID extends boolean = false> = Entry<ID> & {
    id: string;
    name: string;
    fake?: boolean;
};

export type CharacterAttribute<ID extends boolean = false> = Entry<ID> & {
    name: string;
    emoji: string;
};

export type InternalData<ID extends boolean = false> = {
    guild_map: GuildMapEntry<ID>[];
    user_map: UserMapEntry<ID>[];
    elements: CharacterAttribute<ID>[];
    weapons: CharacterAttribute<ID>[];
    regions: CharacterAttribute<ID>[];
    characters: Character<ID>[];
};

export type ElectionRecord<ID extends boolean = false> = Entry<ID> & {
    seats: number;
    candidates: { id: string; status: string; rerunning: boolean }[];
};

export type MembershipChange<ID extends boolean = false> = Entry<ID> & {
    date: Date;
    guild?: string;
    action: string;
    primary?: string;
    secondary?: string;
    notes?: string;
};

export type ObservationRecord<ID extends boolean = false> = Entry<ID> & {
    guild: string;
    observer?: string;
    result: string;
    start?: Date;
    end?: Date;
    notes?: string;
};

export type ObserverTerm<ID extends boolean = false> = Entry<ID> & {
    user: string;
    date: Date;
    terms: number;
};

export type Announcement<ID extends boolean = false> = Entry<ID> & {
    icon: string;
    title: string;
    highlight?: boolean;
    body: string;
    parsed?: string;
};

export type Testimonial<ID extends boolean = false> = Entry<ID> & {
    name: string;
    image: string;
    content: string;
};

type Content = {
    id: string;
    deleted?: boolean;
    author?: string;
    allow_council: boolean;
    allow_logged_in: boolean;
    editable_observers: boolean;
    editable_council: boolean;
    allow_everyone: boolean;
    allowlist: string;
    name: string;
    embed_color: string;
    embed_title: string;
    embed_body: string;
    embed_image: string;
    thumbnail: boolean;
};

export type Doc<ID extends boolean = false> = Entry<ID> &
    Content & {
        official: boolean;
        anon: boolean;
        content: string;
        parsed?: string;
    };

export type FormPageCondition = {
    source: number;
    council_observer?: boolean;
    council_owner?: boolean;
    council_advisor?: boolean;
    council_other?: boolean;
    number_op?: string;
    number_value?: number;
    number_default?: boolean;
    mcq_anyall?: string;
    mcq_mode?: string;
    options: Record<string, boolean>;
    date_op?: string;
    first_date?: string;
    second_date?: string;
    date_default?: boolean;
};

export type FormQuestion = {
    id: number;
    question: string;
    description: string;
    parsed_description?: string;
    required: boolean;
    selected: Record<number, boolean>;
    options: string[];
    dropdown?: boolean;
    min?: number;
    max?: number;
    show_date?: boolean;
    show_time?: boolean;
    use_validation?: boolean;
    short_format?: string;
    float?: boolean;
    relative_time?: string;
    text_format_error?: string;
    integer_error?: string;
    time_error?: string;
    low_error?: string;
    high_error?: string;
    hide?: boolean;
    failed?: string | false;
    value?: {};
    date?: {};
} & (
    | { type: "short"; value?: string }
    | { type: "long"; value?: string }
    | { type: "number"; value?: number }
    | { type: "mcq"; value?: string }
    | { type: "date"; date?: Date }
);

export type FormPage = {
    name: string;
    description: string;
    parsed_description?: string;
    use_condition?: boolean;
    condition: FormPageCondition;
    questions: FormQuestion[];
};

export type Form<ID extends boolean = false> = Entry<ID> &
    Content & {
        collect_names: boolean;
        external: boolean;
        external_url: string;
        external_access: boolean;
        allow_observers: boolean;
        post_to_webhook: boolean;
        only_post_link: boolean;
        webhook: string;
        secret: string;
        is_forum: boolean;
        naming_scheme: number;
        forum_post_name: string;
        pages: FormPage[];
        deleted_questions: Record<number, string>;
        next_id: number;
    };

export type FormSubmission<ID extends boolean = false> = Entry<ID> & {
    user?: string;
    sid: number;
    answers: FormAnswer[];
};

export type MonitorAlert = { id: string } & (
    | {
          key: "invite" | "missing-owner" | "missing-voter" | "invalid-voter";
          item: TCNGuild;
      }
    | { key: "unauthorized"; item: GuildMember }
    | { key: "missing"; item: { guild: TCNGuild; user: User; role: string } }
    | { key: "invalid-id"; item: { guild: TCNGuild; id: string; role: string } }
    | { key: "duplicate"; item: { user: User; positions: string[] } }
);

export type Unpack<T extends unknown[]> = T extends (infer U)[] ? U : never;
export type Fixed<T> = T extends unknown[] ? Exclude<Unpack<T>, "_id">[] : Exclude<T, "_id">;
export type ActionRow = APIActionRowComponent<APIMessageActionRowComponent>;

export type FormAnswer = {
    id: number;
    question: string;
    user?: boolean;
    answer: string | number | { text: string }[] | Date;
    show_date?: boolean;
    show_time?: boolean;
};

export type BaseElement = Element & {
    style: Record<string, string>;
    dataset: Record<string, string>;
};

export type UserTagEntry = {
    id: string;
    tag: string;
    fake?: boolean;
};

export type ApplyFormData = {
    error?: string;
    success?: string;
    mascot?: string;
    role?: string;
    roleother?: string;
    ownerid?: string;
    invite?: string;
    nsfw?: string;
    experience?: string;
    shortgoals?: string;
    longgoals?: string;
    history?: string;
    additional?: string;
    observerchannelconsent?: boolean;
    observerauditconsent?: boolean;
    partnerlistconsent?: boolean;
    eventsconsent?: boolean;
};

export type BanshareFormData = {
    error?: string;
    success?: string;
    ids?: string;
    reason?: string;
    evidence?: string;
    server?: string;
    severity?: string;
    urgent?: boolean;
};

export type InviteData = Invite & {
    expires: number;
};

export type UserRouteData = {
    id: string;
    api?: { owns: TCNGuild[]; advises: TCNGuild[]; staff: TCNGuild[] };
    discord?: { icon: string; tag: string };
};
