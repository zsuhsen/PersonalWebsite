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

            CreateMap<CompanyEntity, Company>().ConvertUsing((entity) => MapEntityToDomain(entity));
            CreateMap<Company, CompanyEntity>().ConvertUsing((domain) => MapDomainToEntity(domain));
        }

        private Job MapEntityToDomain(JobEntity entity)
        {
            Company? company = null;

            if (entity.Company != null)
            {
#pragma warning disable CS8629 // Nullable value type may be null.
                company = new Company()
                {
                    Id = (int)entity.Company.Id,
                    Name = entity.Company.Name,
                    City = entity.Company.City,
                    State = entity.Company.State
                };
#pragma warning restore CS8629 // Nullable value type may be null.
            }

#pragma warning disable CS8629 // Nullable value type may be null.
            var result = new Job()
            {
                Id = (int)entity.Id,
                Title = entity.Title,
                Company = company,
                Description = entity.Description,
                StartDate = entity.StartDate,
                EndDate = entity.EndDate
            };
#pragma warning restore CS8629 // Nullable value type may be null.

            return result;
        }

        private JobEntity MapDomainToEntity(Job domain)
        {
#pragma warning disable CS8602 // Dereference of a possibly null reference.
            var result = new JobEntity()
            {
                Id = domain.Id,
                CompanyId = domain.Company.Id,
                Title = domain.Title,
                Description = domain.Description,
                StartDate = domain.StartDate,
                EndDate = domain.EndDate
            };
#pragma warning restore CS8602 // Dereference of a possibly null reference.

            return result;
        }

        private Company MapEntityToDomain(CompanyEntity entity)
        {
#pragma warning disable CS8629 // Nullable value type may be null.
            var result = new Company()
            {
                Id = (int)entity.Id,
                Name = entity.Name,
                City = entity.City,
                State = entity.State
            };
#pragma warning restore CS8629 // Nullable value type may be null.

            return result;
        }

        private CompanyEntity MapDomainToEntity(Company domain)
        {
            var result = new CompanyEntity();

            return result;
        }
    }
}
