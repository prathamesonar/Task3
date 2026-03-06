using Microsoft.AspNetCore.Mvc;
using JobPortalApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace JobPortalApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApplicationsController :ControllerBase{
        private static List<Application> applications =new List<Application>();
        private static int appid =1;

        [HttpPost]
        public IActionResult Apply(Application application){
            bool alreadyapplied = applications.Any(a =>
                a.Email == application.Email && a.JobId ==application.JobId);
            if (alreadyapplied)
            {
                return BadRequest("already applied for job");
            }

            var job = JobsController.jobs.FirstOrDefault(j => j.Id == application.JobId);
            if (job != null)
            {
                if (application.Answer.ToLower() == job.Correctanswer.ToLower())
                {
                    application.Status = "Shortlisted";
                }
                else
                {
                    application.Status = "Rejected";
                }
            }
            application.Id = appid++;
            applications.Add(application);
            return Ok(application);
        }
        [HttpGet]
        public IActionResult Getapplications()
        {
            return Ok(applications);
        }
    }
}