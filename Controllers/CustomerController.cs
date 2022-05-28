using Microsoft.AspNetCore.Mvc;
using parking_project.Models;
using parking_project.Models.Data;
using System.Diagnostics;

namespace parking_project.Controllers
{
    public class CustomerController : Controller
    {

        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;
        CustomerDao customerDAO;

        public CustomerController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
            //TODO:instantiate studentDAO only once here

        }
    

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Insert([FromBody] Customer customer)
        {

                int resultToReturn = customerDAO.Insert(customer);
                return Ok(resultToReturn);
          
            }
        public IActionResult Get()
        {
            customerDAO = new CustomerDao(_configuration);
            return Ok(customerDAO.Get());

        }
    }
}

