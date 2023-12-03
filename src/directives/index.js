
export default function (app , directives) {
  for (const directive of directives) {
    import(`./${directive}.directive.js`)?.then((module) => {
      // module?.default(app);
      app.directive('focus', module?.default)
    });
  }
}
