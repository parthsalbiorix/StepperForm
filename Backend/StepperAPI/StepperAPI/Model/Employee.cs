using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using StepperAPI.Model;

namespace StepperAPI.Models
{
    public class Employee
    {
        public Employee()
        {
            this.EducationDetails = new List<EducationDetails>();
            this.ExperienceDetails = new List<ExperienceDetails>();
        }

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _id { get; set; }
        public PersonalDetails? PersonalDetails { get; set; }
        public BankDetails? BankDetails { get; set; }
        public ProfessionalDetails? ProfessionalDetails { get; set; }
        public List<EducationDetails>? EducationDetails { get; set; }
        public List<ExperienceDetails>? ExperienceDetails { get; set; }
        public CurrentOrganizationDetails? CurrentOrganizationDetails { get; set; }

    }
}
