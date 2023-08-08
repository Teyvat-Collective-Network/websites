import { DB } from "./db.js";

const changes = (await DB.HistoricalRecords.get_membership_changes()) as any[];

for (const change of changes) {
    if (change.year) {
        change.date = new Date(change.year, change.month - 1, change.date);
        delete change.year;
        delete change.month;
    }
}

await DB.HistoricalRecords.set_membership_changes(changes);

const obss = (await DB.HistoricalRecords.get_observation_schedule()) as any[];

for (const obs of obss) {
    if (obs.start_year) {
        obs.start = new Date(obs.start_year, obs.start_month - 1, obs.start_date);
        delete obs.start_year;
        delete obs.start_month;
        delete obs.start_date;
    }

    if (obs.end_year) {
        obs.end = new Date(obs.end_year, obs.end_month - 1, obs.end_date);
        delete obs.end_year;
        delete obs.end_month;
        delete obs.end_date;
    }
}

await DB.HistoricalRecords.set_observation_schedule(obss);

const terms = (await DB.HistoricalRecords.get_observer_terms()) as any[];

for (const term of terms) {
    if (term.year) {
        term.date = new Date(term.year, term.month - 1, term.date);
        delete term.year;
        delete term.month;
    }
}

await DB.HistoricalRecords.set_observer_terms(terms);

console.log("[MIGRATION COMPLETE: REMEMBER TO REMOVE THE MIGRATION SCRIPT]");
