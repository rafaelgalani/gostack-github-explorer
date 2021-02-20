export default interface Repository {
    full_name: string
    description: string
    fork: boolean
    owner: {
        avatar_url: string
    }
}