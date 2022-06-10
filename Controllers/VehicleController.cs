using Microsoft.AspNetCore.Mvc;
using parking_project.Models.Data;
using parking_project.Models.Domain;

namespace parking_project.Controllers
{
    public class VehicleController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;
        VehicleDAO vehicleDao;

        public VehicleController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
            vehicleDao = new VehicleDAO(_configuration);
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Insert([FromBody] Vehicle vehicle)
        {
            int resultToReturn = vehicleDao.Insert(vehicle);
            return Ok(resultToReturn);
        }

        public IActionResult Get()
        {
            return Ok(vehicleDao.Get());
        }

        public IActionResult Delete(int id)
        {
            return Ok(vehicleDao.Delete(id));
        }

        public IActionResult Update([FromBody] Vehicle vehicle)
        {
            return Ok(vehicleDao.Update(vehicle));
        }

        public IActionResult GetById(int id)
        {
            Vehicle vehicle = vehicleDao.GetById(id);
            return Ok(vehicle);
        }
    }
}
