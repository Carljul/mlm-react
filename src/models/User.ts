import person, { PersonProps } from "./Person";
import roles, { RoleProps } from "./Roles";
import womenCategory from '../assets/img/women_category.jpg';

export interface UserProps {
    id: number,
    person_id: number,
    role_id: number,
    email: string,
    cellphone_number: string,
    is_active: boolean | true,
    genealogy_invitation_code: string | null,
    person: PersonProps,
    role: RoleProps,
    profile_image: string
}

const user: UserProps = {
    id: 1,
    person_id: 1,
    role_id: 1,
    email: 'julcarllselma@gmail.com',
    cellphone_number: '09068765047',
    is_active: true,
    genealogy_invitation_code: null,
    person: person,
    role: roles[2],
    profile_image: womenCategory
}

export default user;