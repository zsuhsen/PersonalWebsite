using System.ComponentModel.DataAnnotations;

namespace Data.Models
{
    public class CompanyEntity
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string? Name { get; set; }

        [Required]
        [MaxLength(50)]
        public string? City { get; set; }

        [Required]
        [MaxLength(50)]
        public string? State { get; set; }

    }
}
