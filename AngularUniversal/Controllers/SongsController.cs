using System.Threading.Tasks;
using Microsoft.AspNetCore.NodeServices;
using Microsoft.AspNetCore.SpaServices.Prerendering;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Web.Mvc;

namespace AngularUniversal.Controllers
{
    public class SongsController : Controller
    {
        private string path;
        private JavaScriptModuleExport module;
        private INodeServices nodeServices;

        public SongsController()
        {
            path = AppDomain.CurrentDomain.BaseDirectory;
            module = new JavaScriptModuleExport("Scripts\\angular\\dist\\server");
            var services = new ServiceCollection();

            services.AddNodeServices(options =>
            {
                options.ProjectPath = AppDomain.CurrentDomain.BaseDirectory;
            });

            var serviceProvider = services.BuildServiceProvider();

            nodeServices = serviceProvider.GetRequiredService<INodeServices>();
        }

        public async Task<ActionResult> Index()
        {
            string unencodedPathAndQuery = Request.RawUrl;
            string unencodedAbsoluteUrl = "http://localhost" + unencodedPathAndQuery;

            TransferData transferData = new TransferData();

            transferData.request = AbstractHttpContextRequestInfo();
            transferData.thisCameFromDotNET = "Hi Angular it's asp.net :)";

            var prerenderResult = await Prerenderer.RenderToString(
                path,
                nodeServices,
                module,
                unencodedPathAndQuery,
                unencodedAbsoluteUrl,
                transferData,
                30000,
                "/songs"
            );
           
            ViewBag.Body = prerenderResult.Html;
            ViewBag.TransferData = prerenderResult.Globals["transferData"];
            return View();
        }

        public ActionResult Error()
        {
            return View();
        }

        private IRequest AbstractHttpContextRequestInfo()
        {

            IRequest requestSimplified = new IRequest();
            requestSimplified.cookies = Request.Cookies;
            requestSimplified.headers = Request.Headers;
            requestSimplified.host = Request.RawUrl;

            return requestSimplified;
        }
    }

    public class IRequest
    {
        public object cookies { get; set; }
        public object headers { get; set; }
        public object host { get; set; }
    }

    public class TransferData
    {
        public dynamic request { get; set; }

        // Your data here ?
        public object thisCameFromDotNET { get; set; }
    }
}