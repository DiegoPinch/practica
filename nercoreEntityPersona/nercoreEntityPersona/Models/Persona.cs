using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nercoreEntityPersona.Models
{
    public class Persona
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Nombre { get; set; }

        [Required]
        public string Apellido { get; set; }

        [Required]
        public int Edad { get; set; }

        [Required]
        public int GeneroId { get; set; }

    }

}
