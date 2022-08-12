using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace StepperAPI.Models
{
    public class Employee
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _id { get; set; }
        public PersonalDetails? personalDetails { get; set; }
        public BankDetails? bankDetails { get; set; }
        public ProfessionalDetails? professionalDetails { get; set; }
        public EducationDetails[]? educationDetails { get; set; }
        public ExperienceDetails[]? experienceDetails { get; set; }
        public CurrentOrganizationDetails? currentOrganizationDetails { get; set; }

    }

    public class PersonalDetails
    {
        public string firstName { get; set; }
        public string middleName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public long mobile { get; set; }
        public DateTime dob { get; set; }
        public string image { get; set; }
        public string presentAddress { get; set; }
        public string permanentAddress { get; set; }

    }

    public class BankDetails
    {
        public string bankName { get; set; }
        public string accountName { get; set; }
        public string accountNumber { get; set; }
        public string panCard { get; set; }
        public string ifscCode { get; set; }
        public long adharcard { get; set; }




    }

    public class ProfessionalDetails
    {
        public string designation { get; set; }
        public string department { get; set; }
        public int years { get; set; }
        public int months { get; set; }
        public string currentLocation { get; set; }
        public string[] skills { get; set; }
        public string resume { get; set; }
    }


    public class EducationDetails
    {
        public string educationName { get; set; }
        public string universityName { get; set; }
        public string result { get; set; }
        public int year { get; set; }
    }
    public class ExperienceDetails
    {
        public string companayName { get; set; }
        public string position { get; set; }
        public int totalYear { get; set; }
        public int CTC { get; set; }
    }
    public class CurrentOrganizationDetails
    {
        public DateTime joiningDate { get; set; }
        public DateTime appraisalDate { get; set; }
        public int currentCTC { get; set; }
    }
}
