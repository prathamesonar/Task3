namespace JobPortalApi.Models
{
    public class Application
    {
        public int Id { get; set; }
        public string ApplicantName { get; set; }
        public string Email { get; set; }
        public int JobId { get; set; }
        public string Answer { get; set; }
        public string currentsalary { get; set; }
        public string expected { get; set; }
        public string phone { get; set; }
        public string experience { get; set; }
        public string noticeperiod { get; set; }
        public string? Status { get; set; }
    }
}