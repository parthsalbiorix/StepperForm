using MongoDB.Driver;
using StepperAPI.Models;

namespace StepperAPI.Services
{
    public class EmployeeService
    {
        public readonly IMongoCollection<Employee> _employees;
        public EmployeeService(IConfiguration Configuration)
        {
            var client = new MongoClient(Configuration.GetConnectionString("cs"));
            var database = client.GetDatabase("employeeDb");

            _employees = database.GetCollection<Employee>("employee");

        }

        public List<Employee> GetAllEmployee()
        {
            return _employees.Find(_employees => true).ToList();
        }

        public Employee GetEmployee(string id)
        {
            return _employees.Find(employee => employee._id == id).FirstOrDefault();
        }
        public Employee Create(Employee employee)
        {
            _employees.InsertOne(employee);
            return employee;
        }

        public Employee UpdateEmployee(string id, Employee employee)
        {
            _employees.ReplaceOne(employee => employee._id == id, employee);
            return employee;
        }

        public void RemoveEmployee(string id)
        {
            _employees.DeleteOne(employee => employee._id == id);
        }

    }
}

