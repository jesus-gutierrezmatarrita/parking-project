using Microsoft.AspNetCore.Mvc;

namespace parking_project.Controllers
{
    public class FareController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
