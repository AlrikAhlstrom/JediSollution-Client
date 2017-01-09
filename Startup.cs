using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JediSollutionClientMattias.Startup))]
namespace JediSollutionClientMattias
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
