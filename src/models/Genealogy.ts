import roles from "./Roles";
import user, { UserProps } from "./User";
import womenCategory from '../assets/img/women_category.jpg';
import menCategory from '../assets/img/men_category.jpg';
import gamingCategory from '../assets/img/gaming_category.jpg';
import devicesCategory from '../assets/img/device_category.jpg';
import gadgetCategory from '../assets/img/gadgets_category.jpg';

export interface GenealogyProps {
    id: number,
    user_id: number,
    user: UserProps,
    downline: GenealogyProps[]
}


const genealogyTree: GenealogyProps = {
    id: 1,
    user_id: 1,
    user: user,
    downline: [
        {
            id: 2,
            user_id: 2,
            user: {
                id: 2,
                person_id: 2,
                role_id: 3,
                email: 'sampledownline@gmail.com',
                cellphone_number: '091233242123',
                is_active: true,
                genealogy_invitation_code: 'adfljer23',
                person: {
                    id: 2,
                    firstname: 'Sample',
                    middlename: null,
                    lastname: 'Downline',
                    suffix: null,
                    fullname: 'Sample Downline',
                    gender: 1,
                    birthdate: new Date('1997-06-22'),
                    civil_status: 1
                },
                role: roles[2],
                profile_image: menCategory
            },
            downline: []
        },
        {
            id: 3,
            user_id: 3,
            user: {
                id: 3,
                person_id: 3,
                role_id: 3,
                email: 'sampledownline2@gmail.com',
                cellphone_number: '091233242123',
                is_active: true,
                genealogy_invitation_code: 'sasafa',
                person: {
                    id: 3,
                    firstname: 'Sample2',
                    middlename: null,
                    lastname: 'Downline2',
                    suffix: null,
                    fullname: 'Sample2 Downline2',
                    gender: 1,
                    birthdate: new Date('1997-06-22'),
                    civil_status: 1
                },
                role: roles[2],
                profile_image: gamingCategory
            },
            downline: [
                {
                    id: 4,
                    user_id: 4,
                    user: {
                        id: 4,
                        person_id: 4,
                        role_id: 3,
                        email: 'sampledownline3@gmail.com',
                        cellphone_number: '091233242123',
                        is_active: true,
                        genealogy_invitation_code: 'asdfe',
                        person: {
                            id: 4,
                            firstname: 'Sample3',
                            middlename: null,
                            lastname: 'Downline3',
                            suffix: null,
                            fullname: 'Sample3 Downline3',
                            gender: 1,
                            birthdate: new Date('1997-06-22'),
                            civil_status: 1
                        },
                        role: roles[2],
                        profile_image: devicesCategory
                    },
                    downline: [
                        {
                            id: 6,
                            user_id: 6,
                            user: {
                                id: 6,
                                person_id: 6,
                                role_id: 3,
                                email: 'sampledownline6@gmail.com',
                                cellphone_number: '091233242123',
                                is_active: true,
                                genealogy_invitation_code: 'aadfsadf',
                                person: {
                                    id: 6,
                                    firstname: 'Sample6',
                                    middlename: null,
                                    lastname: 'Downline6',
                                    suffix: null,
                                    fullname: 'Sample6 Downline6',
                                    gender: 1,
                                    birthdate: new Date('1997-06-22'),
                                    civil_status: 1
                                },
                                role: roles[2],
                                profile_image: womenCategory
                            },
                            downline: []
                        },{
                            id: 7,
                            user_id: 7,
                            user: {
                                id: 7,
                                person_id: 7,
                                role_id: 3,
                                email: 'sampledownline7@gmail.com',
                                cellphone_number: '091233242123',
                                is_active: true,
                                genealogy_invitation_code: 'aadfsadf',
                                person: {
                                    id: 7,
                                    firstname: 'Sample7',
                                    middlename: null,
                                    lastname: 'Downline7',
                                    suffix: null,
                                    fullname: 'Sample7 Downline7',
                                    gender: 1,
                                    birthdate: new Date('1997-06-22'),
                                    civil_status: 1
                                },
                                role: roles[2],
                                profile_image: womenCategory
                            },
                            downline: []
                        }
                    ]
                },{
                    id: 9,
                    user_id: 9,
                    user: {
                        id: 9,
                        person_id: 9,
                        role_id: 3,
                        email: 'sampledownline9@gmail.com',
                        cellphone_number: '091233242123',
                        is_active: true,
                        genealogy_invitation_code: 'asdfe',
                        person: {
                            id: 9,
                            firstname: 'Sample9',
                            middlename: null,
                            lastname: 'Downline9',
                            suffix: null,
                            fullname: 'Sample9 Downline9',
                            gender: 1,
                            birthdate: new Date('1997-06-22'),
                            civil_status: 1
                        },
                        role: roles[2],
                        profile_image: devicesCategory
                    },
                    downline: [
                        {
                            id: 10,
                            user_id: 10,
                            user: {
                                id: 6,
                                person_id: 6,
                                role_id: 3,
                                email: 'sampledownline6@gmail.com',
                                cellphone_number: '091233242123',
                                is_active: true,
                                genealogy_invitation_code: 'aadfsadf',
                                person: {
                                    id: 6,
                                    firstname: 'Sample10',
                                    middlename: null,
                                    lastname: 'Downline10',
                                    suffix: null,
                                    fullname: 'Sample10 Downline10',
                                    gender: 1,
                                    birthdate: new Date('1997-06-22'),
                                    civil_status: 1
                                },
                                role: roles[2],
                                profile_image: womenCategory
                            },
                            downline: []
                        },{
                            id: 7,
                            user_id: 7,
                            user: {
                                id: 7,
                                person_id: 7,
                                role_id: 3,
                                email: 'sampledownline7@gmail.com',
                                cellphone_number: '091233242123',
                                is_active: true,
                                genealogy_invitation_code: 'aadfsadf',
                                person: {
                                    id: 7,
                                    firstname: 'Sample7',
                                    middlename: null,
                                    lastname: 'Downline7',
                                    suffix: null,
                                    fullname: 'Sample7 Downline7',
                                    gender: 1,
                                    birthdate: new Date('1997-06-22'),
                                    civil_status: 1
                                },
                                role: roles[2],
                                profile_image: womenCategory
                            },
                            downline: []
                        }
                    ]
                }
            ]
        },
        {
            id: 8,
            user_id: 8,
            user: {
                id: 8,
                person_id: 8,
                role_id: 3,
                email: 'sampledownline8@gmail.com',
                cellphone_number: '091233242123',
                is_active: true,
                genealogy_invitation_code: 'aadfsadf',
                person: {
                    id: 8,
                    firstname: 'Sample8',
                    middlename: null,
                    lastname: 'Downline8',
                    suffix: null,
                    fullname: 'Sample8 Downline8',
                    gender: 1,
                    birthdate: new Date('1997-06-22'),
                    civil_status: 1
                },
                role: roles[2],
                profile_image: gadgetCategory
            },
            downline: []
        },
    ]
}

export default genealogyTree;