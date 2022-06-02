using Microsoft.AspNetCore.Mvc;
using parking_project.Models;
using parking_project.Models.Data;

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

        public IActionResult InsertSlot([FromBody] ParkingSlot parkingSlot)
        {
            int resultToReturn = parkingDao.InsertSlot(parkingSlot);
            return Ok(resultToReturn);
        }

        public IActionResult Get()
        {
            return Ok(parkingDao.Get());
        }

        public IActionResult Delete(int id)
        {
            return Ok(parkingDao.Delete(id));
        }

        public IActionResult Update([FromBody] Parking parking)
        {
            return Ok(parkingDao.Update(parking));
        }

        public IActionResult GetById(int id)
        {
            Parking parking = parkingDao.GetById(id);
            return Ok(parking);
        }
    }
}
