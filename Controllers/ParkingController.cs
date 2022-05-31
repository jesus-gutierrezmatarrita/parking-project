using Microsoft.AspNetCore.Mvc;
using parking_project.Models.Data;
using parking_project.Models.Domain;

namespace parking_project.Controllers
{
    public class ParkingController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;
        ParkingDAO parkingDao;

        public ParkingController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
            parkingDao = new ParkingDAO(_configuration);
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Insert([FromBody] Parking parking)
        {
            int resultToReturn = parkingDao.Insert(parking);
            return Ok(resultToReturn);
        }

        public IActionResult Get()
        {
            return Ok(parkingDao.Get());
        }
    }
}
