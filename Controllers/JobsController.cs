using Microsoft.AspNetCore.Mvc;
using JobPortalApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace JobPortalApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class JobsController :ControllerBase
    {
        private static List<Job> jobs =new List<Job>();
        private static int jobid =1;
        [HttpGet]
        public IActionResult GetJobs(){
            return Ok(jobs);
        }

        [HttpPost]
        public IActionResult CreateJob(Job job){
            job.Id = jobid++;
            jobs.Add(job);
            return Ok(job);
        }
    }
}