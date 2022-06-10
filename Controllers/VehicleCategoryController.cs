using Microsoft.AspNetCore.Mvc;
using parking_project.Models.Data;

namespace parking_project.Controllers
{
    public class VehicleCategoryController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;
        VehicleCategoryDAO vehicleCategoryDao;

        public VehicleCategoryController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
            vehicleCategoryDao = new VehicleCategoryDAO(_configuration);
        }

        public IActionResult Index()
        {
            return View(vehicleCategoryDao.Get());
        }

        public IActionResult Get()
        {
            return Ok(vehicleCategoryDao.Get());

        }
    }
}
