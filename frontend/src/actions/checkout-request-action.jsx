import {appHistory} from "../ui-components/app-history";

export default function checkoutRequest(uuid) {
    appHistory.push('/ViewRequest/' + uuid);
}