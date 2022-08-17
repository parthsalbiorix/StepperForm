using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using StepperAPI.Models;
using StepperAPI.Services;

namespace StepperAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeService _employeeService;

        public EmployeeController(EmployeeService employeeService)
        {
            _employeeService = employeeService ?? throw new ArgumentNullException(nameof(employeeService));
        }

        #region GetEmployee
        // GET: api/Employee
        [HttpGet]
        public async Task<ActionResult<List<Employee>>> GetAllEmployees()
        {
            if (_employeeService._employees == null)
            {
                return NotFound();
            }
            return await _employeeService.GetAllEmployee();
        }


        // GET: api/Employee/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(string id)
        {
            var employee = await _employeeService.GetEmployee(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        #endregion

        #region POSTEmployee
        //POST: api/Employee
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employeeDTO)
        {

            var employee = await _employeeService.Create(employeeDTO);

            return Ok(employee);
        }

        #endregion

        #region PUTEmployee
        // PUT: api/Employee/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Employee>> PutEmployee(string id, [FromBody] Employee EmployeeDTO)
        {
            var employee = await _employeeService.UpdateEmployee(id, EmployeeDTO);

            return Ok(employee);
        }

        #endregion

        #region DELETEEmployee

        //DELETE: api/Employee/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct(string id)
        {
            var employee = _employeeService.GetEmployee(id);
            if (employee == null)
            {
                return NotFound();
            }
            await _employeeService.RemoveEmployee(id);

            return Ok(true);
        }
        #endregion

    }
}
