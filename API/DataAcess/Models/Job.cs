namespace DataAcess.Models
{
    public class Job
    {
        public int Id { get; set; }

        public string? Title { get; set; }

        public Company? Company { get; set; }

        public string? Description { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime? EndDate { get; set; }
    }

    public class Company
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public string? City { get; set; }

        public string? State { get; set; }
    }
}