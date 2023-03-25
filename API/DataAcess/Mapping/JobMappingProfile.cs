using AutoMapper;
using Data.Models;
using DataAcess.Models;

namespace DataAcess.Mapping
{
    public class JobMappingProfile : Profile
    {
        public JobMappingProfile()
        {
            CreateMap<JobEntity, Job>().ConvertUsing((entity) => MapEntityToDomain(entity));
            CreateMap<Job, JobEntity>().ConvertUsing((domain) => MapDomainToEntity(domain));
        }

        private Job MapEntityToDomain(JobEntity entity)
        {
            Company? company = null;

            if (entity.Company != null)
            {
                company = new Company()
                {
                    Id = entity.Company.Id,
                    Name = entity.Company.Name,
                    City = entity.Company.City,
                    State = entity.Company.State
                };
            }

            var result = new Job()
            {
                Id = entity.Id,
                Company = company,
                Description = entity.Description,
                StartDate = entity.StartDate,
                EndDate = entity.EndDate
            };

            return result;
        }

        private JobEntity MapDomainToEntity(Job domain)
        {
            var result = new JobEntity();

            return result;
        }
    }
}
