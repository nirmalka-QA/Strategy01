using Microsoft.Extensions.DependencyInjection;

namespace BeStrategy.Application;

public static class ApplicationServiceCollectionExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        // Register application-layer services here (e.g. MediatR handlers, validators, AutoMapper)
        return services;
    }
}
