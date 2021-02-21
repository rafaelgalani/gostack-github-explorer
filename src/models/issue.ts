export default interface Issue {
    title: string
    user: {
        login: string;
    }
    number: number;
    html_url: string;
}