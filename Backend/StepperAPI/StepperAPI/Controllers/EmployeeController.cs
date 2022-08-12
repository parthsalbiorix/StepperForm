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
        private readonly IMapper mapper;
        private readonly EmployeeService _employeeService;

        public EmployeeController(EmployeeService employeeService, IMapper mapper)
        {
            _employeeService = employeeService;
            this.mapper = mapper;
        }

        #region GetEmployee
        // GET: api/Employee
        [HttpGet]
        public ActionResult<List<Employee>> GetAllEmployees()
        {
            if (_employeeService._employees == null)
            {
                return NotFound();
            }
            return _employeeService.GetAllEmployee();
        }


        // GET: api/Employee/5
        [HttpGet("{id}")]
        public ActionResult<Employee> GetEmployee(string id)
        {
            if (_employeeService._employees == null)
            {
                return NotFound();
            }
            var employee = _employeeService.GetEmployee(id);

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
        public ActionResult<Employee> PostEmployee(Employee employeeDTO)
        {

            var employee = _employeeService.Create(employeeDTO);

            return Ok(employee);
        }

        #endregion

        #region PUTEmployee
        // PUT: api/Employee/5
        [HttpPut("{id}")]
        public IActionResult PutEmployee(string id, [FromBody] Employee EmployeeDTO)
        {
            var employee = _employeeService.UpdateEmployee(id, EmployeeDTO);

            return Ok(employee);
        }

        #endregion

        #region DELETEEmployee

        //DELETE: api/Employee/5
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(string id)
        {
            var employee = _employeeService.GetEmployee(id);
            if (employee == null)
            {
                return NotFound();
            }
            _employeeService.RemoveEmployee(id);

            return Ok(true);
        }
        #endregion

    }
}
