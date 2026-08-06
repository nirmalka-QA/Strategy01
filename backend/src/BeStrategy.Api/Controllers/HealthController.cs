using Microsoft.AspNetCore.Mvc;

namespace BeStrategy.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
internal sealed class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(new { status = "healthy", utc = DateTime.UtcNow });
}
