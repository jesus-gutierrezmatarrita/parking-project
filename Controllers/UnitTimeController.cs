using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Diagnostics;
using parking_project.Models.Data;
using parking_project.Models.Domain;
namespace parking_project.Controllers
{
    public class UnitTimeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;
        UnitTimeDAO unitTimeDAO;

        public UnitTimeController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
            unitTimeDAO = new UnitTimeDAO(_configuration);
        }
        public ActionResult Index()
        {
            return View();
        }
        public IActionResult Get()
        {
            try
            {


                return Ok(unitTimeDAO.Get());
            }
            catch (Exception)
            {

                return Error();
            }

        }

        private IActionResult Error()
        {
            throw new NotImplementedException();
        }
    }
}
