import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa , setNovaTarefa] = useState("");

  const [lista , setLista] = useState (["Beber" , "Comer" , "Viver"]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista  , novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (item) => {
    const removeLista = lista.filter((remove) => remove!==item);
    setLista(removeLista);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        {
          lista.map((tarefa) => {
            return(
              <ul>
              <Tarefa>
                {tarefa}
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            </ul>
            )
          })
        }
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
