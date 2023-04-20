export interface PersonProps {
    id: number,
    firstname: string,
    middlename: string | null,
    lastname: string,
    suffix: string | null
    fullname: string,
    gender: number,
    birthdate: Date,
    civil_status: number
}

const person: PersonProps = {
    id: 1,
    firstname: 'Julcarl',
    middlename: 'Lawas',
    lastname: 'Selma',
    suffix: null,
    fullname: 'Julcarl L. Selma',
    gender: 1,
    birthdate: new Date('1997-06-22'),
    civil_status: 1
}


export default person;