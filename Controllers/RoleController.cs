using Microsoft.AspNetCore.Mvc;
using parking_project.Models.Data;
using parking_project.Models.Domain;

namespace parking_project.Controllers
{
    public class RoleController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;
        RoleDAO roleDao;

        public RoleController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
            roleDao = new RoleDAO(_configuration);
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Insert([FromBody] Role role)
        {
            int resultToReturn = roleDao.Insert(role);
            return Ok(resultToReturn);
        }

        public IActionResult Get()
        {
            return Ok(roleDao.Get());
        }

        public IActionResult Delete(int id)
        {
            return Ok(roleDao.Delete(id));
        }

        public IActionResult Update([FromBody] Role role)
        {
            return Ok(roleDao.Update(role));
        }

        public IActionResult GetById(int id)
        {
            Role role = roleDao.GetById(id);
            return Ok(role);
        }
    }
}
