(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
        /***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/styles.less": 
        /*!********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/less-loader/dist/cjs.js??ref--16-3!./src/styles.less ***!
          \********************************************************************************************************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = [[module.i, "@import url('https://fonts.googleapis.com/css?family=Roboto');\n@import url('https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap');\n* {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, serif;\n  font-size: 2vh;\n  color: black;\n}\nbody a {\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n}\n.btn {\n  display: inline-block;\n  padding: 0.4rem 1.3rem;\n  font-size: 0.9rem;\n  border: none;\n  cursor: pointer;\n  background: #5e0943;\n  color: #ebe6d9;\n  border-radius: 25px;\n}\n.btn:disabled {\n  cursor: not-allowed;\n  background: #ebe6d9;\n  border: 1px #5e0943 solid;\n  color: #5e0943;\n}\n.cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.incident-card {\n  width: 75vw;\n  border: #5e0943 1px solid;\n  border-radius: 10px;\n  display: flex;\n  margin: 2vh 1vw;\n}\n.incident-card .left-content-card {\n  background: #b14359;\n  border-radius: 10px 0 0 10px;\n  border-right: none;\n  color: #ebe6d9;\n  width: 10%;\n}\n.incident-card .left-content-card .svg-card {\n  height: 50%;\n}\n.incident-card .left-content-card .svg-card svg {\n  stroke: black;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1%;\n}\n.incident-card .left-content-card .status-card {\n  height: 50%;\n  text-align: center;\n}\n.incident-card .right-content-card {\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n}\n.incident-card .right-content-card .title-card {\n  height: 50%;\n  font-size: 1.3rem;\n  font-weight: bold;\n  padding: 1vh 1vw;\n  overflow: hidden;\n  margin-right: 1vw;\n}\n.incident-card .right-content-card .info-card {\n  height: 50%;\n  display: flex;\n  justify-content: space-between;\n  padding: 1vh 1vw;\n  margin-bottom: 1vh;\n}\n.incident-card .right-content-card .info-card .content-wrap {\n  width: 25%;\n  font-size: 0.7rem;\n  border-left: #5e0943 solid 1px;\n  padding: 0 1vw ;\n}\n.incident-card .right-content-card .info-card .content-wrap .place {\n  font-size: 0.8rem;\n}\n.incident-card:hover {\n  transform: translate(0, 0.1vh);\n  box-shadow: 0.4em 0.4em 0.5vh rgba(122, 122, 122, 0.5);\n}\n@media screen and (max-width: 620px) {\n  .incident-card .left-content-card .svg-card {\n    height: 30%;\n  }\n  .incident-card .left-content-card .status-card {\n    height: 70%;\n    padding: 50% 0;\n  }\n  .incident-card .left-content-card .status-card div {\n    position: relative;\n    top: 50%;\n    transform: rotate(-90deg) translate(50%, 0);\n    text-align: center;\n  }\n  .incident-card .right-content-card .title-card {\n    height: 30%;\n  }\n  .incident-card .right-content-card .info-card {\n    height: 70%;\n    flex-wrap: wrap;\n  }\n  .incident-card .right-content-card .info-card .content-wrap {\n    min-width: 50%;\n  }\n}\ninput[type='text'],\ninput[type='email'],\ninput[type='password'],\ninput[type='date'],\nselect {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.4vh;\n  font-size: 0.9rem;\n  border: 1px solid #ccc;\n}\n.wrapper {\n  max-width: 50rem;\n  display: flex;\n  margin: 0.5rem 0;\n  align-items: center;\n}\n.wrapper label {\n  width: 25%;\n}\n.wrapper input,\n.wrapper div,\n.wrapper select {\n  width: 75%;\n  font-size: 1.2rem;\n}\n.wrapper .secondWrapper {\n  display: flex;\n}\n.wrapper .secondWrapper div:first-child,\n.wrapper .secondWrapper input:first-child {\n  width: 30%;\n  padding: 0.4rem 0;\n}\n.wrapper .secondWrapper select {\n  width: 70%;\n}\n.backdrop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.modal {\n  padding: 1rem;\n  background-color: #ebe6d9;\n  position: absolute;\n  left: 50%;\n  top: 25%;\n  transform: translate(-50%, -25%);\n}\n.btn-wrap {\n  border: none;\n}\n.btn-wrap .btn {\n  margin-left: 50%;\n  transform: translate(-50%, 0);\n}\n.wrap-btn {\n  margin-top: 1rem;\n}\n.wrap-btn button {\n  width: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMubGVzcyIsInNyYy9DOi9Vc2Vycy9HbGViL0Rlc2t0b3AvcHJvamVjdC9hbmd1bGFySWNpZGVudC9zcmMvc3R5bGVzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRDQ2tCO0FEQWxCLDZFQ0NpQjtBQUdqQjtFQUNFLHNCQUFBO0FERkY7QUNJQTtFQUNJLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FERko7QUNGQTtFQU1RLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUREUjtBQ0lBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBREZGO0FDR0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FEREo7QUNJQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QURGRjtBQ0lBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBREZGO0FDSEE7RUFPSSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBRERKO0FDVkE7RUFhTSxXQUFBO0FEQU47QUNiQTtFQWVRLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QURDUjtBQ25CQTtFQXNCTSxXQUFBO0VBQ0Esa0JBQUE7QURBTjtBQ3ZCQTtFQTRCSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FERko7QUM1QkE7RUFnQ00sV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURETjtBQ3BDQTtFQXlDTSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREZOO0FDM0NBO0VBZ0RRLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBREZSO0FDakRBO0VBcURVLGlCQUFBO0FERFY7QUNPRTtFQUNFLDhCQUFBO0VBQ0Esc0RBQUE7QURMSjtBQ1FBO0VBQ0U7SUFLTSxXQUFBO0VEVk47RUNLQTtJQVFNLFdBQUE7SUFDQSxjQUFBO0VEVk47RUNDQTtJQVdRLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLDJDQUFBO0lBQ0Esa0JBQUE7RURUUjtFQ0xBO0lBcUJNLFdBQUE7RURiTjtFQ1JBO0lBd0JNLFdBQUE7SUFDQSxlQUFBO0VEYk47RUNaQTtJQTJCUSxjQUFBO0VEWlI7QUFDRjtBQytFQTs7Ozs7RUFLRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUQ3RUY7QUNnRkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEOUVGO0FDMEVBO0VBTUksVUFBQTtBRDdFSjtBQ3VFQTs7O0VBVUksVUFBQTtFQUNBLGlCQUFBO0FENUVKO0FDaUVBO0VBY0ksYUFBQTtBRDVFSjtBQzhEQTs7RUFnQk0sVUFBQTtFQUNBLGlCQUFBO0FEMUVOO0FDeURBO0VBcUJNLFVBQUE7QUQzRU47QUMrRUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLG9DQUFBO0FEN0VGO0FDK0VBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0FEN0VGO0FDK0VBO0VBQ0UsWUFBQTtBRDdFRjtBQzRFQTtFQUdJLGdCQUFBO0VBQ0EsNkJBQUE7QUQ1RUo7QUMrRUE7RUFDRSxnQkFBQTtBRDdFRjtBQzRFQTtFQUdJLFVBQUE7QUQ1RUoiLCJmaWxlIjoic3JjL3N0eWxlcy5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8nKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9WWVvbitTdW5nJmRpc3BsYXk9c3dhcCcpO1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzZXJpZjtcbiAgZm9udC1zaXplOiAydmg7XG4gIGNvbG9yOiBibGFjaztcbn1cbmJvZHkgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjRyZW0gMS4zcmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICM1ZTA5NDM7XG4gIGNvbG9yOiAjZWJlNmQ5O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmJ0bjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJhY2tncm91bmQ6ICNlYmU2ZDk7XG4gIGJvcmRlcjogMXB4ICM1ZTA5NDMgc29saWQ7XG4gIGNvbG9yOiAjNWUwOTQzO1xufVxuLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pbmNpZGVudC1jYXJkIHtcbiAgd2lkdGg6IDc1dnc7XG4gIGJvcmRlcjogIzVlMDk0MyAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMnZoIDF2dztcbn1cbi5pbmNpZGVudC1jYXJkIC5sZWZ0LWNvbnRlbnQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNiMTQzNTk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgY29sb3I6ICNlYmU2ZDk7XG4gIHdpZHRoOiAxMCU7XG59XG4uaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQgLnN2Zy1jYXJkIHtcbiAgaGVpZ2h0OiA1MCU7XG59XG4uaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQgLnN2Zy1jYXJkIHN2ZyB7XG4gIHN0cm9rZTogYmxhY2s7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgc3Ryb2tlLXdpZHRoOiAxJTtcbn1cbi5pbmNpZGVudC1jYXJkIC5sZWZ0LWNvbnRlbnQtY2FyZCAuc3RhdHVzLWNhcmQge1xuICBoZWlnaHQ6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluY2lkZW50LWNhcmQgLnJpZ2h0LWNvbnRlbnQtY2FyZCB7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaW5jaWRlbnQtY2FyZCAucmlnaHQtY29udGVudC1jYXJkIC50aXRsZS1jYXJkIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMXZoIDF2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXJpZ2h0OiAxdnc7XG59XG4uaW5jaWRlbnQtY2FyZCAucmlnaHQtY29udGVudC1jYXJkIC5pbmZvLWNhcmQge1xuICBoZWlnaHQ6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxdmggMXZ3O1xuICBtYXJnaW4tYm90dG9tOiAxdmg7XG59XG4uaW5jaWRlbnQtY2FyZCAucmlnaHQtY29udGVudC1jYXJkIC5pbmZvLWNhcmQgLmNvbnRlbnQtd3JhcCB7XG4gIHdpZHRoOiAyNSU7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBib3JkZXItbGVmdDogIzVlMDk0MyBzb2xpZCAxcHg7XG4gIHBhZGRpbmc6IDAgMXZ3IDtcbn1cbi5pbmNpZGVudC1jYXJkIC5yaWdodC1jb250ZW50LWNhcmQgLmluZm8tY2FyZCAuY29udGVudC13cmFwIC5wbGFjZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmluY2lkZW50LWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwLjF2aCk7XG4gIGJveC1zaGFkb3c6IDAuNGVtIDAuNGVtIDAuNXZoIHJnYmEoMTIyLCAxMjIsIDEyMiwgMC41KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5pbmNpZGVudC1jYXJkIC5sZWZ0LWNvbnRlbnQtY2FyZCAuc3ZnLWNhcmQge1xuICAgIGhlaWdodDogMzAlO1xuICB9XG4gIC5pbmNpZGVudC1jYXJkIC5sZWZ0LWNvbnRlbnQtY2FyZCAuc3RhdHVzLWNhcmQge1xuICAgIGhlaWdodDogNzAlO1xuICAgIHBhZGRpbmc6IDUwJSAwO1xuICB9XG4gIC5pbmNpZGVudC1jYXJkIC5sZWZ0LWNvbnRlbnQtY2FyZCAuc3RhdHVzLWNhcmQgZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoNTAlLCAwKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmluY2lkZW50LWNhcmQgLnJpZ2h0LWNvbnRlbnQtY2FyZCAudGl0bGUtY2FyZCB7XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cbiAgLmluY2lkZW50LWNhcmQgLnJpZ2h0LWNvbnRlbnQtY2FyZCAuaW5mby1jYXJkIHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLmluY2lkZW50LWNhcmQgLnJpZ2h0LWNvbnRlbnQtY2FyZCAuaW5mby1jYXJkIC5jb250ZW50LXdyYXAge1xuICAgIG1pbi13aWR0aDogNTAlO1xuICB9XG59XG5pbnB1dFt0eXBlPSd0ZXh0J10sXG5pbnB1dFt0eXBlPSdlbWFpbCddLFxuaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxcbmlucHV0W3R5cGU9J2RhdGUnXSxcbnNlbGVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMC40dmg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuLndyYXBwZXIge1xuICBtYXgtd2lkdGg6IDUwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndyYXBwZXIgbGFiZWwge1xuICB3aWR0aDogMjUlO1xufVxuLndyYXBwZXIgaW5wdXQsXG4ud3JhcHBlciBkaXYsXG4ud3JhcHBlciBzZWxlY3Qge1xuICB3aWR0aDogNzUlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi53cmFwcGVyIC5zZWNvbmRXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53cmFwcGVyIC5zZWNvbmRXcmFwcGVyIGRpdjpmaXJzdC1jaGlsZCxcbi53cmFwcGVyIC5zZWNvbmRXcmFwcGVyIGlucHV0OmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMC40cmVtIDA7XG59XG4ud3JhcHBlciAuc2Vjb25kV3JhcHBlciBzZWxlY3Qge1xuICB3aWR0aDogNzAlO1xufVxuLmJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5tb2RhbCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmU2ZDk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDI1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTI1JSk7XG59XG4uYnRuLXdyYXAge1xuICBib3JkZXI6IG5vbmU7XG59XG4uYnRuLXdyYXAgLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuLndyYXAtYnRuIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi53cmFwLWJ0biBidXR0b24ge1xuICB3aWR0aDogNTAlO1xufVxuIiwiXG5AaW1wb3J0IChjc3MpIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bycpO1xuQGltcG9ydCAoY3NzKXVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVllb24rU3VuZyZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgXCJjb2xvclwiO1xuXG4qe1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAydmg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGF7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxufVxuLmJ0bntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjRyZW0gMS4zcmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IEBjb2xvci1kYXJrO1xuICBjb2xvcjogQGNvbG9yLWxpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAmOmRpc2FibGVke1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgYmFja2dyb3VuZDogQGNvbG9yLWxpZ2h0O1xuICAgIGJvcmRlcjogMXB4IEBjb2xvci1kYXJrIHNvbGlkO1xuICAgIGNvbG9yOiBAY29sb3ItZGFyaztcbiAgfVxufVxuLmNhcmRze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmluY2lkZW50LWNhcmR7XG4gIHdpZHRoOiA3NXZ3O1xuICBib3JkZXI6ICM1ZTA5NDMgMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDJ2aCAxdnc7XG4gIC5sZWZ0LWNvbnRlbnQtY2FyZHtcbiAgICBiYWNrZ3JvdW5kOiBAY29sb3ItYmFsYW5jZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBjb2xvcjogQGNvbG9yLWxpZ2h0O1xuICAgIHdpZHRoOiAxMCU7XG4gICAgLnN2Zy1jYXJke1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICBzdmd7XG4gICAgICAgIHN0cm9rZTpibGFjaztcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgICAgICBzdHJva2Utd2lkdGg6IDElO1xuICAgICAgfVxuICAgIH1cbiAgICAuc3RhdHVzLWNhcmR7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIH1cbiAgfVxuICAucmlnaHQtY29udGVudC1jYXJke1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC50aXRsZS1jYXJke1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZzogMXZoIDF2dztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tcmlnaHQ6IDF2dztcblxuICAgIH1cbiAgICAuaW5mby1jYXJke1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMXZoIDF2dztcbiAgICAgIG1hcmdpbi1ib3R0b206IDF2aDtcblxuICAgICAgLmNvbnRlbnQtd3JhcHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIGJvcmRlci1sZWZ0OiAjNWUwOTQzIHNvbGlkIDFweDtcbiAgICAgICAgcGFkZGluZzogMCAxdncgO1xuICAgICAgICAucGxhY2V7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxuICAmOmhvdmVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuMXZoKTtcbiAgICBib3gtc2hhZG93OiAwLjRlbSAwLjRlbSAwLjV2aCByZ2JhKDEyMiwxMjIsMTIyLDAuNSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5pbmNpZGVudC1jYXJke1xuXG4gICAgLmxlZnQtY29udGVudC1jYXJke1xuXG4gICAgICAuc3ZnLWNhcmR7XG4gICAgICAgIGhlaWdodDogMzAlO1xuICAgICAgfVxuICAgICAgLnN0YXR1cy1jYXJke1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgcGFkZGluZzogNTAlIDA7XG4gICAgICAgIGRpdntcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoNTAlLDApO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAucmlnaHQtY29udGVudC1jYXJke1xuXG4gICAgICAudGl0bGUtY2FyZHtcbiAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICB9XG4gICAgICAuaW5mby1jYXJke1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAuY29udGVudC13cmFwe1xuICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1cbiAgfVxufVxuXG5cblxuXG4vL1xuLy8uY29udGVudC10YWJsZXtcbi8vICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuLy8gIG1hcmdpbjogMjVweCAwcHg7XG4vLyAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4vLyAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuLy8gIGZvbnQtc2l6ZTogMC45ZW07XG4vLyAgbWluLXdpZHRoOiA0MDBweDtcbi8vICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4vLyAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gIHRoZWFkIHRye1xuLy8gICAgYmFja2dyb3VuZC1jb2xvcjogQGNvbG9yLWJhbGFuY2U7XG4vLyAgICBjb2xvcjogQGNvbG9yLWxpZ2h0O1xuLy8gICAgdGV4dC1hbGlnbjogbGVmdDtcbi8vICB9XG4vLyAgdGgsIHRke1xuLy8gICAgcGFkZGluZzoxMnB4IDE1cHg7XG4vLyAgfVxuLy8gIHRib2R5IHRye1xuLy8gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNDcwOWE7XG4vLyAgfVxuLy8gIHVse1xuLy8gICAgbGlzdC1zdHlsZTogbm9uZTtcbi8vICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICBmbGV4LXdyYXA6IHdyYXA7XG4vLyAgICBwYWRkaW5nOiAwO1xuLy8gICAgbWFyZ2luOiAwO1xuLy8gICAgbGl7XG4vLyAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhNWMxO1xuLy8gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICAgICBtYXJnaW46IDVweDtcbi8vICAgICAgcGFkZGluZzogNXB4O1xuLy8gICAgfVxuLy8gIH1cbi8vfVxuLy8uYnRue1xuLy8gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgcGFkZGluZzogMC40cmVtIDEuM3JlbTtcbi8vICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuLy8gICAgYm9yZGVyOiBub25lO1xuLy8gICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XG4vLyAgICBvdXRsaW5lOiBub25lO1xuLy8gICAgYmFja2dyb3VuZDogQGNvbG9yLWRhcms7XG4vLyAgICBjb2xvcjogI2ViZTZkOTtcbi8vICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4vLyAgICAmOmRpc2FibGVkIHtcbi8vICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbi8vICAgICAgYmFja2dyb3VuZDogQGNvbG9yLWxpZ2h0O1xuLy8gICAgICBib3JkZXI6IDFweCBAY29sb3ItZGFyayBzb2xpZDtcbi8vICAgICAgY29sb3I6IEBjb2xvci1kYXJrO1xuLy8gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICAgfVxuLy99XG5pbnB1dFt0eXBlPSd0ZXh0J10sXG5pbnB1dFt0eXBlPSdlbWFpbCddLFxuaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxcbmlucHV0W3R5cGU9J2RhdGUnXSxcbnNlbGVjdHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwLjR2aDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi53cmFwcGVye1xuICBtYXgtd2lkdGg6IDUwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsYWJlbHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIGlucHV0LCBkaXYsXG4gIHNlbGVjdHtcbiAgICB3aWR0aDo3NSU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLnNlY29uZFdyYXBwZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXY6Zmlyc3QtY2hpbGQsaW5wdXQ6Zmlyc3QtY2hpbGR7XG4gICAgICB3aWR0aDozMCU7XG4gICAgICBwYWRkaW5nOiAwLjRyZW0gMDtcbiAgICA7XG4gICAgfVxuICAgIHNlbGVjdHtcbiAgICAgIHdpZHRoOjcwJTtcbiAgICB9XG4gIH1cbn1cbi5iYWNrZHJvcHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTowO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMyk7XG59XG4ubW9kYWx7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmU2ZDk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDo1MCU7XG4gIHRvcDogMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC0yNSUpO1xufVxuLmJ0bi13cmFwe1xuICBib3JkZXI6IG5vbmU7XG4gIC5idG57XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDApO1xuICB9XG59XG4ud3JhcC1idG57XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6NTAlO1xuICB9XG59XG4iXX0= */", '', '']];
            /***/ 
        }),
        /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": 
        /*!****************************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
          \****************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var stylesInDom = {};
            var isOldIE = function isOldIE() {
                var memo;
                return function memorize() {
                    if (typeof memo === 'undefined') {
                        // Test for IE <= 9 as proposed by Browserhacks
                        // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
                        // Tests for existence of standard globals is to allow style-loader
                        // to operate correctly into non-standard environments
                        // @see https://github.com/webpack-contrib/style-loader/issues/177
                        memo = Boolean(window && document && document.all && !window.atob);
                    }
                    return memo;
                };
            }();
            var getTarget = function getTarget() {
                var memo = {};
                return function memorize(target) {
                    if (typeof memo[target] === 'undefined') {
                        var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself
                        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                            try {
                                // This will throw an exception if access to iframe is blocked
                                // due to cross-origin restrictions
                                styleTarget = styleTarget.contentDocument.head;
                            }
                            catch (e) {
                                // istanbul ignore next
                                styleTarget = null;
                            }
                        }
                        memo[target] = styleTarget;
                    }
                    return memo[target];
                };
            }();
            function listToStyles(list, options) {
                var styles = [];
                var newStyles = {};
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var id = options.base ? item[0] + options.base : item[0];
                    var css = item[1];
                    var media = item[2];
                    var sourceMap = item[3];
                    var part = {
                        css: css,
                        media: media,
                        sourceMap: sourceMap
                    };
                    if (!newStyles[id]) {
                        styles.push(newStyles[id] = {
                            id: id,
                            parts: [part]
                        });
                    }
                    else {
                        newStyles[id].parts.push(part);
                    }
                }
                return styles;
            }
            function addStylesToDom(styles, options) {
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];
                    var j = 0;
                    if (domStyle) {
                        domStyle.refs++;
                        for (; j < domStyle.parts.length; j++) {
                            domStyle.parts[j](item.parts[j]);
                        }
                        for (; j < item.parts.length; j++) {
                            domStyle.parts.push(addStyle(item.parts[j], options));
                        }
                    }
                    else {
                        var parts = [];
                        for (; j < item.parts.length; j++) {
                            parts.push(addStyle(item.parts[j], options));
                        }
                        stylesInDom[item.id] = {
                            id: item.id,
                            refs: 1,
                            parts: parts
                        };
                    }
                }
            }
            function insertStyleElement(options) {
                var style = document.createElement('style');
                if (typeof options.attributes.nonce === 'undefined') {
                    var nonce = true ? __webpack_require__.nc : undefined;
                    if (nonce) {
                        options.attributes.nonce = nonce;
                    }
                }
                Object.keys(options.attributes).forEach(function (key) {
                    style.setAttribute(key, options.attributes[key]);
                });
                if (typeof options.insert === 'function') {
                    options.insert(style);
                }
                else {
                    var target = getTarget(options.insert || 'head');
                    if (!target) {
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    }
                    target.appendChild(style);
                }
                return style;
            }
            function removeStyleElement(style) {
                // istanbul ignore if
                if (style.parentNode === null) {
                    return false;
                }
                style.parentNode.removeChild(style);
            }
            /* istanbul ignore next  */
            var replaceText = function replaceText() {
                var textStore = [];
                return function replace(index, replacement) {
                    textStore[index] = replacement;
                    return textStore.filter(Boolean).join('\n');
                };
            }();
            function applyToSingletonTag(style, index, remove, obj) {
                var css = remove ? '' : obj.css; // For old IE
                /* istanbul ignore if  */
                if (style.styleSheet) {
                    style.styleSheet.cssText = replaceText(index, css);
                }
                else {
                    var cssNode = document.createTextNode(css);
                    var childNodes = style.childNodes;
                    if (childNodes[index]) {
                        style.removeChild(childNodes[index]);
                    }
                    if (childNodes.length) {
                        style.insertBefore(cssNode, childNodes[index]);
                    }
                    else {
                        style.appendChild(cssNode);
                    }
                }
            }
            function applyToTag(style, options, obj) {
                var css = obj.css;
                var media = obj.media;
                var sourceMap = obj.sourceMap;
                if (media) {
                    style.setAttribute('media', media);
                }
                if (sourceMap && btoa) {
                    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
                } // For old IE
                /* istanbul ignore if  */
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                }
                else {
                    while (style.firstChild) {
                        style.removeChild(style.firstChild);
                    }
                    style.appendChild(document.createTextNode(css));
                }
            }
            var singleton = null;
            var singletonCounter = 0;
            function addStyle(obj, options) {
                var style;
                var update;
                var remove;
                if (options.singleton) {
                    var styleIndex = singletonCounter++;
                    style = singleton || (singleton = insertStyleElement(options));
                    update = applyToSingletonTag.bind(null, style, styleIndex, false);
                    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
                }
                else {
                    style = insertStyleElement(options);
                    update = applyToTag.bind(null, style, options);
                    remove = function remove() {
                        removeStyleElement(style);
                    };
                }
                update(obj);
                return function updateStyle(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                            return;
                        }
                        update(obj = newObj);
                    }
                    else {
                        remove();
                    }
                };
            }
            module.exports = function (list, options) {
                options = options || {};
                options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
                // tags it will allow on a page
                if (!options.singleton && typeof options.singleton !== 'boolean') {
                    options.singleton = isOldIE();
                }
                var styles = listToStyles(list, options);
                addStylesToDom(styles, options);
                return function update(newList) {
                    var mayRemove = [];
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i];
                        var domStyle = stylesInDom[item.id];
                        if (domStyle) {
                            domStyle.refs--;
                            mayRemove.push(domStyle);
                        }
                    }
                    if (newList) {
                        var newStyles = listToStyles(newList, options);
                        addStylesToDom(newStyles, options);
                    }
                    for (var _i = 0; _i < mayRemove.length; _i++) {
                        var _domStyle = mayRemove[_i];
                        if (_domStyle.refs === 0) {
                            for (var j = 0; j < _domStyle.parts.length; j++) {
                                _domStyle.parts[j]();
                            }
                            delete stylesInDom[_domStyle.id];
                        }
                    }
                };
            };
            /***/ 
        }),
        /***/ "./src/styles.less": 
        /*!*************************!*\
          !*** ./src/styles.less ***!
          \*************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/less-loader/dist/cjs.js??ref--16-3!./styles.less */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/styles.less");
            if (typeof content === 'string') {
                content = [[module.i, content, '']];
            }
            var options = {};
            options.insert = "head";
            options.singleton = false;
            var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);
            if (content.locals) {
                module.exports = content.locals;
            }
            /***/ 
        }),
        /***/ 3: 
        /*!*******************************!*\
          !*** multi ./src/styles.less ***!
          \*******************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Gleb\Desktop\project\angularIcident\src\styles.less */ "./src/styles.less");
            /***/ 
        })
    }, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map
//# sourceMappingURL=styles-es5.js.map
//# sourceMappingURL=styles-es5.js.map