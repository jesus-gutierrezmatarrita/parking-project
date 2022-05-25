using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using parking_project.Models;

namespace parking_project.Controllers;

public class HomeController : Controller
{
    private readonly ProjectParkingJARSContext _context;

    public HomeController(ProjectParkingJARSContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
        return View();
    }
    
    public IActionResult GetUsers(string username, string password)
    {
        var user = _context.staff.Where(x => x.Username == username && x.Password == password);

        if (user.Any())
        {
            if (user.Where(x => x.Username == username && x.Password == password).Any())
            {
                return Json(new { status = true, message = "Welcome" });
            }
            else
            {
                return Json(new { status = false, message = "Incorrect password" });
            }
        } else
        {
            return Json(new { status = false, message = "Incorrect username" });
        }
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
