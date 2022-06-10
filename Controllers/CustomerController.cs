using Microsoft.AspNetCore.Mvc;
using parking_project.Models;
using parking_project.Models.Data;
using System.Diagnostics;
using parking_project.Models.Domain;

namespace parking_project.Controllers
{
    public class CustomerController : Controller
    {

        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;
        CustomerDao customerDAO;
        Email email;

        public CustomerController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
            customerDAO = new CustomerDao(_configuration);
            email = new Email();
            //TODO:instantiate studentDAO only once here

        }
    

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Insert([FromBody] Customer customer)
        {
            if (customerDAO.Get(customer.Email).Email == null)
            {
             
                int resultToReturn = customerDAO.Insert(customer);
                //email.SendEmail(customer.Email, "Nuevo Usuario", customer.Name + " " + customer.Lastname +
//", ha sido añadido satisfactoriamente. ");
                return Ok(resultToReturn);

            }
            else
            {
                return Error();
            }
        }
        public IActionResult Get()
        {
            return Ok(customerDAO.Get());

        }
        public IActionResult GetByEmail(string email)
        {
            Customer customer = customerDAO.Get(email);

            return Ok(customer);

        }
        public IActionResult Update([FromBody] Customer customer)
        {

            if (customer.Id == customerDAO.Get(customer.Email).Id)
            {
                return Ok(customerDAO.Update(customer));
            }
            else
            {
                if (customerDAO.Get(customer.Email).Email == null)
                {

                    return Ok(customerDAO.Update(customer));
                }
                else
                {
                    return Error();
                }
            }

        }

        private IActionResult Error()
        {
            throw new NotImplementedException();
        }

        public IActionResult Delete([FromBody] int Id)
        {
            return Ok(customerDAO.Delete(Id));
        }
    }
}

