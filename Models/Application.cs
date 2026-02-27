namespace JobPortalApi.Models
{
    public class Application
    {
        public int Id { get; set; }
        public string ApplicantName { get; set; }
        public string Email { get; set; }
        public int JobId { get; set; }
    }
}