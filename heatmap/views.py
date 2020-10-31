from django.views.generic import DetailView

from braces.views import JSONResponseMixin

from .models import Heatmap

# Create your views here.

class SingleItem(JSONResponseMixin, DetailView):

  model = Heatmap

  def get(self, request, *args, **kwargs):
    self.object = self.get_object()

    context_dict = {
      u"image": self.object.image.url
    }

    return self.render_json_response(context_dict)
