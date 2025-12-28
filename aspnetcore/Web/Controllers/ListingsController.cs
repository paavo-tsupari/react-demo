using System.Runtime.Versioning;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListingsController : ControllerBase
    {
        
        [HttpGet]
        [Route("/")]
        public IActionResult GetListings()
        {
            // Sample data - in a real application, this would come from a database or service
            var listings = new[]
            {
                new { Id = 1, Title = "Listing 1", Description = "Description for Listing 1" },
                new { Id = 2, Title = "Listing 2", Description = "Description for Listing 2" },
                new { Id = 3, Title = "Listing 3", Description = "Description for Listing 3" }
            };

            return Ok(listings);
        }
    }
}
