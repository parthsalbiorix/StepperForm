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

        public async Task<List<Employee>> GetAllEmployee()
        {
            return await _employees.Find(_employees => true).ToListAsync();
        }

        public async Task<Employee> GetEmployee(string id)
        {
            return await _employees.Find(employee => employee._id == id).FirstAsync();
        }
        public async Task<Employee> Create(Employee employee)
        {
            await _employees.InsertOneAsync(employee);
            return employee;
        }

        public async Task<Employee> UpdateEmployee(string id, Employee employee)
        {
            await _employees.ReplaceOneAsync(employee => employee._id == id, employee);
            return employee;
        }

        public async Task RemoveEmployee(string id)
        {
            await _employees.DeleteOneAsync(employee => employee._id == id);
        }

    }
}

