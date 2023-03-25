using API.Models;
using API.Services;
using DataAcess.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JobController : ControllerBase
    {
        private readonly IJobService _jobService;
        private readonly ILogger<JobController> _logger;

        public JobController(IJobService jobService, ILogger<JobController> logger)
        {
            _jobService = jobService;
            _logger = logger;
        }

        [HttpGet(Name = "")]
        public IResult<List<Job>> Get()
        {
            return _jobService.Get();
        }
    }
}