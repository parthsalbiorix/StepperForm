export class Employee {
    _id: string;
    personalDetails: PersonalDetails;
    bankDetails: BankDetails;
    professionalDetails: ProfessionalDetails;
    educationDetails: EducationDetails[];
    experienceDetails: ExperienceDetails[];
    currentOrganizationDetails: CurrentOrganizationDetails;
}

export class PersonalDetails {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    mobile: string;
    dob: Date;
    image: File | string;
    presentAddress: string;
    permanentAddress: string;
}

export class BankDetails {
    bankName: string;
    accountName: string;
    accountNumber: string;
    panCard: string;
    ifscCode: string;
    adharcard: string;
}

export class ProfessionalDetails {
    designation: string;
    department: string;
    years: number;
    months: number;
    currentLocation: string;
    skills: string[];
    resume: File | string;
}
export class EducationDetails {
    educationName: string;
    universityName: string;
    result: string;
    year: number;
}

export class ExperienceDetails {
    companayName: string;
    position: string;
    totalYear: number;
    CTC: number;
}

export class CurrentOrganizationDetails {
    joiningDate: Date;
    appraisalDate: Date;
    currentCTC: number;
}