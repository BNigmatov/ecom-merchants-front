import React, { useState } from "react";
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { DataView } from 'primereact/dataview';

export default function HeaderIconDemo() {
  const epos_list = [];
  const cashboxs = [{
    name: 'Temo 1',
    channel: 'internet',
    status: 'active',
  }, {
    name: 'Temo 2',
    channel: 'application',
    status: 'inactive',
  }];
  const [visible, setVisible] = useState(false);

  const itemTemplate = (items, index) => {
    return <div>
            <div className="col-12 border-bottom-1 surface-border mb-4">
              <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-3">
                <div className="text-2xl font-bold text-900">Humo:</div>
                <div className="field">
                  <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                      <i className="pi pi-user"></i>
                    </span>
                    <span className="p-float-label">
                      <InputText value="1234567" />
                      <label>ID контрагента</label>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                      <i className="pi pi-user"></i>
                    </span>
                    <span className="p-float-label">
                      <InputText value="1234567" />
                      <label>ID терминала</label>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 border-bottom-1 surface-border">
              <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-3">
                <div className="text-2xl font-bold text-900">Uzcard:</div>
                <div className="field">
                  <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                      <i className="pi pi-user"></i>
                    </span>
                    <span className="p-float-label">
                      <InputText value="1234567" />
                      <label>ID контрагента</label>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                      <i className="pi pi-user"></i>
                    </span>
                    <span className="p-float-label">
                      <InputText value="1234567" />
                      <label>ID терминала</label>
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </div>
  };

  return (
    <div className="card">
      <TabView>
        <TabPanel header="Основные" leftIcon="pi pi-calendar mr-2" className="flex flex-wrap flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start">
          <div className="field col-12 lg:col-6 xl:col-4">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <span className="p-float-label">
                <InputText value="1234567" />
                <label>Номер договора</label>
              </span>
            </div>
          </div>

          <div className="field col-12 lg:col-6 xl:col-4">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <span className="p-float-label">
                <InputText value="Tebo" />
                <label>Название контрагента</label>
              </span>
            </div>
          </div>

          <div className="field col-12 lg:col-6 xl:col-4">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <span className="p-float-label">
              <Dropdown placeholder="Выберите" />
                <label>Категория</label>
              </span>
            </div>
          </div>

          <div className="field col-12 lg:col-6 xl:col-4">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <span className="p-float-label">
              <Dropdown placeholder="Выберите" />
                <label>Статус</label>
              </span>
            </div>
          </div>

          <div className="field col-12 lg:col-6 xl:col-4">
            . . . . . . .
          </div>

        </TabPanel>
        <TabPanel header="Контакты" leftIcon="pi pi-user mr-2">
          <div className="field col-12">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <span className="p-float-label">
                <InputText />
                <label>Адрес</label>
              </span>
            </div>
          </div>

          <div className="field col-12">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <span className="p-float-label">
                <InputText />
                <label>Телефон</label>
              </span>
            </div>
          </div>

          <div className="field col-12">
            . . . . . . .
          </div>

        </TabPanel>
        <TabPanel header="Кассы" leftIcon="pi pi-cog mr-2">
          <DataTable value={cashboxs} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Название кассы"></Column>
                <Column field="channel" header="Тип кассы"></Column>
                <Column field="status" header="Статус"></Column>
                <Column field="actions" header="Действия"></Column>
            </DataTable>
            <div>
              <Button label="Добавить новую кассу" className="mt-4" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            </div>
        </TabPanel>
      </TabView>

      <Dialog header="Добавления кассы / Редактирование кассы" visible={visible} style={{ width: '90vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
          <TabView>
            <TabPanel header="Основные" leftIcon="pi pi-calendar mr-2">
              <div className="field col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <span className="p-float-label">
                    <InputText />
                    <label>Название кассы</label>
                  </span>
                </div>
              </div>

              <div className="field col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <span className="p-float-label">
                  <Dropdown placeholder="Выберите" />
                    <label>Тип кассы</label>
                  </span>
                </div>
              </div>

              <div className="field col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <span className="p-float-label">
                  <Dropdown placeholder="Выберите" />
                    <label>Статус кассы</label>
                  </span>
                </div>
              </div>

            </TabPanel>

            <TabPanel header="Доп.данные" leftIcon="pi pi-calendar mr-2">
              <div className="field col-12">
                . . . . . . .
              </div>
            </TabPanel>

            <TabPanel header="Данные 'epos'" leftIcon="pi pi-calendar mr-2">
              <DataView value={epos_list} listTemplate={itemTemplate} />
            </TabPanel>

            <TabPanel header="Уведомления" leftIcon="pi pi-calendar mr-2">
              <div className="field col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <span className="p-float-label">
                    <InputText />
                    <label>Telegram Chat ID</label>
                  </span>
                </div>
              </div>

              <div className="field col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <span className="p-float-label">
                    <InputText />
                    <label>Ссылка на уведомление API контрагента (callback)</label>
                  </span>
                </div>
              </div>

              <div className="field col-12">
                . . . . . . .
              </div>

            </TabPanel>

          </TabView>
      </Dialog>
    </div>
  );
}
