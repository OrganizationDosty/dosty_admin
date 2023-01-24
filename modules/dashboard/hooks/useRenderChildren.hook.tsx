import Users from "modules/dashboard/categories/users/subCategories/users";

const useRenderChildren = (): { RenderChildren: (subSection: string) => JSX.Element } => {
    const RenderChildren = (subSection: string): JSX.Element => {

        switch (subSection) {
            case 'users':
                return <Users />
            default:
                return <h1>opala</h1>
        }
    }

    return{
        RenderChildren
    }

}

export default useRenderChildren