using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Models
{
    public class JobEntity
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("CompanyId")]
        public int CompanyId { get; set; }

        public CompanyEntity? Company { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        [MaxLength(200)]
        public string? Description { get; set; }


    }
}
